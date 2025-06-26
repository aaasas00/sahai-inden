-21
+30
  private matches: Match[] = [
    {
      id: 1,
      homeTeam: "Arsenal",
      awayTeam: "Manchester City",
      homeScore: undefined,
      awayScore: undefined,
      status: "scheduled",
      matchDate: new Date('2025-06-26T18:00:00Z'),
      league: "Premier League",
      homeTeam: 'Galatasaray',
      awayTeam: 'Fenerbahçe',
      homeScore: 2,
      awayScore: 1,
      status: 'finished',
      matchDate: new Date('2024-12-20T19:00:00'),
      league: 'Süper Lig',
      isLive: false
    },
    {
      id: 2,
      homeTeam: "Galatasaray",
      awayTeam: "Fenerbahçe",
      homeScore: 2,
      homeTeam: 'Beşiktaş',
      awayTeam: 'Trabzonspor',
      homeScore: 1,
      awayScore: 1,
      status: "finished",
      matchDate: new Date('2025-06-25T17:00:00Z'),
      league: "Süper Lig",
      status: 'live',
      matchDate: new Date('2024-12-27T20:00:00'),
      league: 'Süper Lig',
      isLive: true
    },
    {
      id: 3,
      homeTeam: 'İstanbul Başakşehir',
      awayTeam: 'Sivasspor',
      status: 'scheduled',
      matchDate: new Date('2024-12-28T15:30:00'),
      league: 'Süper Lig',
      isLive: false
    },
    {
      id: 3,
      homeTeam: "Beşiktaş",
      awayTeam: "Trabzonspor",
      homeScore: 1,
      awayScore: 1,
      status: "live",
      matchDate: new Date('2025-06-26T19:00:00Z'),
      league: "Süper Lig",
      id: 4,
      homeTeam: 'Konyaspor',
      awayTeam: 'Antalyaspor',
      homeScore: 0,
      awayScore: 0,
      status: 'live',
      matchDate: new Date('2024-12-27T17:45:00'),
      league: 'Süper Lig',
      isLive: true
    }
  ];
-16
+39
    {
      id: 1,
      matchId: 1,
      title: "Arsenal – Manchester City: İki takım da formda ama savunmada açıklar var",
      content: "Bu maçta her iki takım da son haftalarda iyi bir form sergiledi. Arsenal'in evindeki performansı dikkat çekici, ancak Manchester City'nin deplasman gücü de yadsınamaz. Savunma hatları her iki takımda da zayıf görünüyor, bu da gollü bir maça işaret ediyor.",
      author: "Ahmet Kaya",
      createdAt: new Date('2025-06-26T10:00:00Z'),
      title: 'Galatasaray\'nın Fenerbahçe Karşısındaki Muhteşem Performansı',
      content: 'Galatasaray, Fenerbahçe\'yi 2-1 mağlup ederek büyük bir galibiyet elde etti. Maçın ilk yarısında Icardi\'nin muhteşem golü ile öne geçen Galatasaray, ikinci yarıda da Kerem Aktürkoğlu\'nun harika vuruşuyla skoru 2-0\'a çıkardı. Fenerbahçe\'nin son dakikalarda bulduğu gol, Galatasaray\'ın galibiyetini engelleyemedi.',
      author: 'Mehmet Demirkol',
      createdAt: new Date('2024-12-20T22:30:00'),
      featured: true
    },
    {
      id: 2,
      matchId: 2,
      title: "Galatasaray Fenerbahçe Derbisinin Analizi",
      content: "Derbi maçı Galatasaray'ın 2-1'lik galibiyetiyle sonuçlandı. İkinci yarıda yakalanan gol avantajı maçın kaderini belirledi. Fenerbahçe'nin savunma hatası kritik oldu.",
      author: "Mehmet Özkan",
      createdAt: new Date('2025-06-25T20:00:00Z'),
      featured: false
      title: 'Beşiktaş - Trabzonspor: Dengeli Mücadele Sürüyor',
      content: 'Vodafone Park\'ta oynanan maçta her iki takım da galibiyeti elde etmek için mücadele ediyor. Beşiktaş\'ın 35. dakikada Cenk Tosun ile bulduğu gol karşısında, Trabzonspor 67. dakikada Anastasios Bakasetas ile eşitliği yakaladı. Maç şu anda 1-1 berabere devam ediyor.',
      author: 'Erman Toroğlu',
      createdAt: new Date('2024-12-27T20:45:00'),
      featured: true
    },
    {
      id: 3,
      title: 'Türk Futbolunda Genç Yetenekler',
      content: 'Son dönemde Türk futbolunda yükselen genç yetenekler dikkat çekiyor. Özellikle Galatasaray\'dan Kerem Aktürkoğlu, Fenerbahçe\'den Arda Güler ve Beşiktaş\'tan Emirhan İlkhan gibi oyuncular gelecek vadediyor. Bu genç futbolcular hem kulüplerinde hem de milli takımda önemli roller üstlenmeye başladı.',
      author: 'Rıdvan Dilmen',
      createdAt: new Date('2024-12-25T14:00:00'),
      featured: true
    }
  ];
  private predictions: Prediction[] = [
    {
      id: 1,
      matchId: 1,
      prediction: "home",
      matchId: 3,
      prediction: 'home',
      confidence: 75,
      reasoning: 'İstanbul Başakşehir, evinde güçlü bir performans sergiliyor. Sivasspor\'un deplasman formu zayıf. Başakşehir\'in kazanma ihtimali yüksek.',
      createdAt: new Date('2024-12-27T10:00:00')
    },
    {
      id: 2,
      matchId: 4,
      prediction: 'draw',
      confidence: 65,
      reasoning: "Arsenal evinde güçlü, Manchester City'nin savunma sorunları var. Ev sahibi avantajı ile Arsenal öne geçiyor.",
      createdAt: new Date('2025-06-26T09:00:00Z')
      reasoning: 'Her iki takım da benzer güçte. Konyaspor evinde daha rahat, Antalyaspor ise son maçlarda iyi form gösteriyor. Beraberlik muhtemel.',
      createdAt: new Date('2024-12-27T09:30:00')
    },
    {
      id: 3,
      prediction: 'home',
      confidence: 80,
      reasoning: 'Galatasaray, şampiyonluk yarışında önemli bir avantaja sahip. Takımın formu mükemmel ve Fenerbahçe karşısındaki moral büyük bir etken.',
      createdAt: new Date('2024-12-26T16:00:00')
    }
  ];
  private nextId = {
    matches: 4,
    analyses: 3,
    predictions: 2
    match: 5,
    analysis: 4,
    prediction: 4
  };
  async getMatches(): Promise<Match[]> {
-7
+7
  async createMatch(match: InsertMatch): Promise<Match> {
    const newMatch: Match = {
      id: this.nextId.matches++,
      ...match,
      id: this.nextId.match++,
      ...match
    };
    this.matches.push(newMatch);
    return newMatch;
  }
  async updateMatch(id: number, updates: Partial<Match>): Promise<Match | null> {
    const index = this.matches.findIndex(match => match.id === id);
    if (index === -1) return null;
    this.matches[index] = { ...this.matches[index], ...updates };
    return this.matches[index];
    const matchIndex = this.matches.findIndex(match => match.id === id);
    if (matchIndex === -1) return null;
    
    this.matches[matchIndex] = { ...this.matches[matchIndex], ...updates };
    return this.matches[matchIndex];
  }
  async getAnalyses(): Promise<Analysis[]> {
-2
+2
  async createAnalysis(analysis: InsertAnalysis): Promise<Analysis> {
    const newAnalysis: Analysis = {
      id: this.nextId.analyses++,
      id: this.nextId.analysis++,
      ...analysis,
      createdAt: new Date(),
      createdAt: new Date()
    };
    this.analyses.push(newAnalysis);
    return newAnalysis;
-2
+2
  async createPrediction(prediction: InsertPrediction): Promise<Prediction> {
    const newPrediction: Prediction = {
      id: this.nextId.predictions++,
      id: this.nextId.prediction++,
      ...prediction,
      createdAt: new Date(),
      createdAt: new Date()
    };
    this.predictions.push(newPrediction);
    return newPrediction;
