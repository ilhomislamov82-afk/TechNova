export default function handler(req: any, res: any) {
  res.status(200).json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    model: 'gemini-3.8-flash',
    platform: 'TechNova Platform (Vercel Serverless)',
    timestamp: new Date().toISOString()
  });
}
