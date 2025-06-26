-37
+47
import express from 'express';
import { Router } from 'express';
import { IStorage } from './storage.js';
import { insertMatchSchema, insertAnalysisSchema, insertPredictionSchema } from '../shared/schema.js';
export function createRoutes(storage: IStorage) {
  const router = express.Router();
  const router = Router();
  // Match routes
  router.get('/api/matches', async (req, res) => {
  router.get('/matches', async (req, res) => {
    try {
      const matches = await storage.getMatches();
      res.json(matches);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch matches' });
      res.status(500).json({ error: 'Maçlar alınırken hata oluştu' });
    }
  });
  router.get('/api/matches/live', async (req, res) => {
  router.get('/matches/live', async (req, res) => {
    try {
      const liveMatches = await storage.getLiveMatches();
      res.json(liveMatches);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch live matches' });
      res.status(500).json({ error: 'Canlı maçlar alınırken hata oluştu' });
    }
  });
  router.get('/api/matches/:id', async (req, res) => {
  router.get('/matches/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const match = await storage.getMatchById(id);
      if (!match) {
        return res.status(404).json({ error: 'Match not found' });
        return res.status(404).json({ error: 'Maç bulunamadı' });
      }
      res.json(match);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch match' });
      res.status(500).json({ error: 'Maç alınırken hata oluştu' });
    }
  });
  router.post('/api/matches', async (req, res) => {
  router.post('/matches', async (req, res) => {
    try {
      const validatedData = insertMatchSchema.parse({
        ...req.body,
        matchDate: new Date(req.body.matchDate)
      });
      const match = await storage.createMatch(validatedData);
      res.status(201).json(match);
      const validatedData = insertMatchSchema.parse(req.body);
      const newMatch = await storage.createMatch(validatedData);
      res.status(201).json(newMatch);
    } catch (error) {
      res.status(400).json({ error: 'Invalid match data' });
      res.status(400).json({ error: 'Geçersiz maç verisi' });
    }
  });
  router.patch('/matches/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedMatch = await storage.updateMatch(id, req.body);
      if (!updatedMatch) {
        return res.status(404).json({ error: 'Maç bulunamadı' });
      }
      res.json(updatedMatch);
    } catch (error) {
      res.status(500).json({ error: 'Maç güncellenirken hata oluştu' });
    }
  });
  // Analysis routes
  router.get('/api/analyses', async (req, res) => {
  router.get('/analyses', async (req, res) => {
    try {
      const analyses = await storage.getAnalyses();
      res.json(analyses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch analyses' });
      res.status(500).json({ error: 'Analizler alınırken hata oluştu' });
    }
  });
  router.get('/api/analyses/featured', async (req, res) => {
  router.get('/analyses/featured', async (req, res) => {
    try {
      const featuredAnalyses = await storage.getFeaturedAnalyses();
      res.json(featuredAnalyses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch featured analyses' });
      res.status(500).json({ error: 'Öne çıkan analizler alınırken hata oluştu' });
    }
  });
  router.get('/api/analyses/:id', async (req, res) => {
  router.get('/analyses/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const analysis = await storage.getAnalysisById(id);
      if (!analysis) {
        return res.status(404).json({ error: 'Analysis not found' });
        return res.status(404).json({ error: 'Analiz bulunamadı' });
      }
      res.json(analysis);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch analysis' });
      res.status(500).json({ error: 'Analiz alınırken hata oluştu' });
    }
  });
  router.post('/api/analyses', async (req, res) => {
  router.post('/analyses', async (req, res) => {
    try {
      const validatedData = insertAnalysisSchema.parse(req.body);
      const analysis = await storage.createAnalysis(validatedData);
      res.status(201).json(analysis);
      const newAnalysis = await storage.createAnalysis(validatedData);
      res.status(201).json(newAnalysis);
    } catch (error) {
      res.status(400).json({ error: 'Invalid analysis data' });
      res.status(400).json({ error: 'Geçersiz analiz verisi' });
    }
  });
  // Prediction routes
  router.get('/api/predictions', async (req, res) => {
  router.get('/predictions', async (req, res) => {
    try {
      const predictions = await storage.getPredictions();
      res.json(predictions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch predictions' });
      res.status(500).json({ error: 'Tahminler alınırken hata oluştu' });
    }
  });
  router.get('/api/predictions/:id', async (req, res) => {
  router.get('/predictions/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const prediction = await storage.getPredictionById(id);
      if (!prediction) {
        return res.status(404).json({ error: 'Prediction not found' });
        return res.status(404).json({ error: 'Tahmin bulunamadı' });
      }
      res.json(prediction);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch prediction' });
      res.status(500).json({ error: 'Tahmin alınırken hata oluştu' });
    }
  });
  router.post('/api/predictions', async (req, res) => {
  router.post('/predictions', async (req, res) => {
    try {
      const validatedData = insertPredictionSchema.parse(req.body);
      const prediction = await storage.createPrediction(validatedData);
      res.status(201).json(prediction);
      const newPrediction = await storage.createPrediction(validatedData);
      res.status(201).json(newPrediction);
    } catch (error) {
      res.status(400).json({ error: 'Invalid prediction data' });
      res.status(400).json({ error: 'Geçersiz tahmin verisi' });
    }
  });
