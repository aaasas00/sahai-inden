shared/schema.ts
-2
+1
import { z } from "zod";
import { z } from 'zod';
// Match data model
export interface Match {
  id: number;
  homeTeam: string;
-1
+0
  isLive: boolean;
}
// Match analysis/commentary model
export interface Analysis {
  id: number;
  matchId?: number;
-1
+0
  featured: boolean;
}
// Predictions model
export interface Prediction {
  id: number;
  matchId?: number;
-12
+10
  createdAt: Date;
}
// Insert schemas
export const insertMatchSchema = z.object({
  homeTeam: z.string().min(1),
  awayTeam: z.string().min(1),
  homeTeam: z.string(),
  awayTeam: z.string(),
  homeScore: z.number().optional(),
  awayScore: z.number().optional(),
  status: z.enum(['scheduled', 'live', 'finished']),
  matchDate: z.date(),
  league: z.string().min(1),
  isLive: z.boolean().default(false),
  matchDate: z.string().transform((str) => new Date(str)),
  league: z.string(),
  isLive: z.boolean()
});
export const insertAnalysisSchema = z.object({
  matchId: z.number().optional(),
  title: z.string().min(1),
  content: z.string().min(1),
  author: z.string().min(1),
  featured: z.boolean().default(false),
  title: z.string(),
  content: z.string(),
  author: z.string(),
  featured: z.boolean()
});
export const insertPredictionSchema = z.object({
  matchId: z.number().optional(),
  prediction: z.enum(['home', 'draw', 'away']),
  confidence: z.number().min(1).max(100),
  reasoning: z.string().min(1),
  reasoning: z.string()
});
// Types
export type InsertMatch = z.infer<typeof insertMatchSchema>;
export type InsertAnalysis = z.infer<typeof insertAnalysisSchema>;
export type InsertPrediction
