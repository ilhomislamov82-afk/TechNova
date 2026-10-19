import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ChatMessage } from '../types';
import { 
  Bot, 
  Send, 
  RotateCcw, 
  Sparkles, 
  Cpu, 
  AlertCircle, 
  ShieldCheck, 
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';

export const TechIView: React.FC = () => {
  const { language, t } = useApp();

  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    // Initial welcome message from TechI
    return [
      {
        id: 'initial-welcome',
        role: 'model',
        text: t.techi.welcomeBubble[language],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: 'live_gemini',
      },
    ];
  });
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // When language changes, update the initial message if conversation hasn't started yet
  useEffect(() => {
    if (messages.length === 1 && messages[0].id === 'initial-welcome') {
      setMessages([
        {
          id: 'initial-welcome',
          role: 'model',
          text: t.techi.welcomeBubble[language],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          mode: 'live_gemini',
        },
      ]);
    }
  }, [language]);

  // Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isTyping) return;

    setErrorMessage(null);
    setInputMessage('');

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Build history payload for server
      const historyPayload = messages.slice(-6).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/techi/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
          language,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || (language === 'uz' ? 'Kechirasiz, javob olishda xatolik yuz berdi.' : language === 'ru' ? 'Извините, не удалось получить ответ.' : 'Sorry, could not retrieve response.');

      const botMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: data.mode || (data.isOfflineFallback ? 'knowledge_base' : 'live_gemini'),
        isOfflineFallback: data.isOfflineFallback,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Error contacting TechI:', err);
      setErrorMessage(t.techi.errorDesc[language]);

      // Provide local resilient knowledge bank answer if server network had a hiccup
      const localFallbackMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        text: language === 'uz'
          ? "Texnik xatolik: Tarmoq uzilishi yuz berdi. TechI bilan aloqa qayta tiklanishi uchun savolni qayta yuborib ko'ring yoki server sozlamalarini tekshiring."
          : language === 'ru'
          ? "Техническая заминка: Произошел сетевой сбой. Пожалуйста, отправьте сообщение повторно или проверьте сетевой статус."
          : "Network interruption: Unable to complete request. Please retry your question or check network connectivity.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOfflineFallback: true,
      };
      setMessages((prev) => [...prev, localFallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewConversation = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: t.techi.welcomeBubble[language],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        mode: 'live_gemini',
      },
    ]);
    setErrorMessage(null);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Safe lightweight markdown formatter
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Header 3
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-base sm:text-lg font-extrabold text-cyan-600 dark:text-cyan-400 mt-3 mb-1.5">
            {line.replace('### ', '')}
          </h4>
        );
      }
      // Header 2
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-4 mb-2">
            {line.replace('## ', '')}
          </h3>
        );
      }
      // Bullet list item
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const itemText = line.trim().replace(/^[-*]\s+/, '');
        return (
          <li key={idx} className="ml-4 list-disc text-xs sm:text-sm my-1 text-slate-800 dark:text-slate-200">
            {renderInlineMarkdown(itemText)}
          </li>
        );
      }
      // Numbered list item
      if (/^\d+\.\s/.test(line.trim())) {
        return (
          <div key={idx} className="font-bold text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 mt-2 mb-0.5">
            {renderInlineMarkdown(line)}
          </div>
        );
      }
      // Empty line
      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }
      // Regular paragraph
      return (
        <p key={idx} className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 my-1">
          {renderInlineMarkdown(line)}
        </p>
      );
    });
  };

  // Inline markdown helper for bold and code
  const renderInlineMarkdown = (text: string) => {
    // Split by bold (**text**)
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[11px] text-cyan-700 dark:text-cyan-300">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="page-transition bg-techi-style min-h-screen pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  TechI
                </h1>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                  Technologic Intelligence AI
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.techi.subtitle[language]}
              </p>
            </div>
          </div>

          <button
            onClick={handleNewConversation}
            className="btn-tech self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.techi.newChatBtn[language]}</span>
          </button>
        </div>

        {/* Suggested Questions Chips */}
        <div className="my-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{t.techi.suggestedTitle[language]}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {t.techi.suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q[language])}
                disabled={isTyping}
                className="btn-tech text-left p-2.5 sm:p-3 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 hover:border-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all flex items-center justify-between gap-2 shadow-xs disabled:opacity-50"
              >
                <span className="truncate">{q[language]}</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window Container */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B132B] shadow-xl overflow-hidden flex flex-col h-[560px] sm:h-[620px]">
          
          {/* Scrollable Message History */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    isUser
                      ? 'bg-slate-900 dark:bg-cyan-600 text-white'
                      : 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white'
                  }`}>
                    {isUser ? <span className="text-xs font-bold">You</span> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-sm leading-relaxed ${
                    isUser
                      ? 'bg-slate-900 text-white dark:bg-cyan-600 dark:text-white rounded-tr-none'
                      : 'bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 rounded-tl-none shadow-xs'
                  }`}>
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div className="space-y-1">
                        {renderFormattedContent(msg.text)}

                        {/* Mode badge / verified indicator */}
                        <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                            {msg.isOfflineFallback
                              ? t.techi.kbBadge[language]
                              : t.techi.liveBadge[language]}
                          </span>

                          <button
                            onClick={() => handleCopyText(msg.id, msg.text)}
                            className="hover:text-cyan-600 dark:hover:text-cyan-400 p-1 flex items-center gap-1 text-[10px]"
                            title="Copy message"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    <div className={`text-[10px] mt-1.5 ${isUser ? 'text-slate-300 dark:text-cyan-200 text-right' : 'text-slate-400'}`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="rounded-2xl rounded-tl-none p-4 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 typing-dot-1" />
                      <span className="w-2 h-2 rounded-full bg-cyan-500 typing-dot-2" />
                      <span className="w-2 h-2 rounded-full bg-cyan-500 typing-dot-3" />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                      {t.techi.typingIndicator[language]}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Error Banner if any */}
          {errorMessage && (
            <div className="px-6 py-2.5 bg-rose-50 dark:bg-rose-950/40 border-t border-rose-200 dark:border-rose-900/50 flex items-center justify-between text-xs text-rose-700 dark:text-rose-300">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
              <button
                onClick={() => setErrorMessage(null)}
                className="font-bold hover:underline"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Input Form Bar */}
          <div className="p-3 sm:p-4 bg-slate-50/70 dark:bg-slate-900/70 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.techi.inputPlaceholder[language]}
                disabled={isTyping}
                className="input-tech flex-1 px-4 py-3 rounded-2xl bg-white dark:bg-[#070C18] border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 disabled:opacity-50"
              />

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="btn-tech p-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                title={t.techi.sendBtn[language]}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Educational Integrity Disclaimer */}
            <div className="mt-2 text-[11px] text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
              <span>{t.techi.factsDisclaimer[language]}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
