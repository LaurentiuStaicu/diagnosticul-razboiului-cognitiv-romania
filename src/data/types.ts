export type StratumId = 'A' | 'B' | 'C';

export interface DualRegisterItem {
  id: string;
  stratum: StratumId;
  theoreticalConcept: string;
  theoreticalAuthor: string;
  theoreticalMechanism: string;
  empiricalReality: string;
  systemicOutcome: 'tension' | 'synthesis';
}

export interface SubchapterStep {
  id: string;
  stepNumber: number;
  actNumber: 1 | 2 | 3 | 4;
  actTitle: string;
  chapterNumber: number;
  chapterTitle: string;
  code: string;
  title: string;
  dominantStrata: StratumId[];
  linkedFigureId?: number;
  summaryThesis: string;
  paragraphs: string[];
  dualRegister: DualRegisterItem[];
  keyConceptIds: string[];
  citedAuthorNames: string[];
}

export interface Table1Row {
  id: string;
  dimensionNumber: number;
  dimensionTitle: string;
  stratumA: string;
  stratumB: string;
  stratumC: string;
}

export interface Table2Row {
  id: string;
  phaseCode: 'Faza I' | 'Faza II' | 'Faza III';
  phaseSubtitle: string;
  horizon: string;
  humanBiology: string;
  digitalAndSociospatial: string;
  informationalLifestyle: string;
  institutionalSystem: string;
}

export interface RegionalCase {
  id: string;
  country: string;
  roleInModel: string;
  exposureProfile: string;
  stratumA: string;
  stratumB: string;
  stratumC: string;
  strategicLesson: string;
  statusType: 'synthesis' | 'tension';
}

export interface GlossaryConcept {
  id: string;
  term: string;
  stratum: StratumId;
  authors: string;
  domain: string;
  definition: string;
  monographContext: string;
  polarity: 'tension' | 'synthesis' | 'neutral';
}

export interface BibliographyItem {
  id: string;
  authors: string;
  year: string;
  title: string;
  publication: string;
  fullCitation: string;
  domain: 'Sociologie instituțională' | 'Neuroștiințe și psihobiologie' | 'Cibernetică și semiotică' | 'Psihologie analitică și memorie' | 'Geopolitică și ideologie rusă';
}

export interface ExecutivePoint {
  id: string;
  title: string;
  takeaway: string;
  implication: string;
}

export interface ChapterExecutiveSummary {
  chapterNumber: number;
  chapterTitle: string;
  actTitle: string;
  executiveSynthesis: ExecutivePoint[];
}

export interface InstitutionalProtocolRow {
  id: string;
  phaseCode: 'Faza I' | 'Faza II' | 'Faza III';
  phaseTitle: string;
  horizon: string;
  targetObjective: string;
  concreteIntervention: string;
  responsibleActors: string;
}

export interface CinematicScene {
  id: string;
  sceneNumber: number;
  title: string;
  timecode: string;
  cameraAndComposition: string;
  colorAndSymbols: string;
  soundDesign: string;
  voiceoverScript: string;
  dominantAccent: 'red' | 'gold' | 'slate';
}

