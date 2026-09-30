export interface Patient {
  id: string;
  patient_code: string;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  room_number: string;
  admission_time: string;
  status: string;
}

export interface DirectusSchema {
  patients: Patient[];
}

export interface Vital {
  id: string;
  patient_id: string;
  timestamp: string;
  heart_rate: number | null;
  respiratory_rate: number | null;
  systolic_bp: number | null;
  diastolic_bp: number | null;
  spo2: number | null;
  temperature: number | null;
}

export interface Lab {
  id: string;
  patient_id: string;
  timestamp: string;
  hemoglobin: number | null;
  white_blood_cell_count: number | null;
  platelets: number | null;
  creatinine: number | null;
  lactate: number | null;
  glucose: number | null;
  sodium: number | null;
  potassium: number | null;
}

export interface Medication {
  id: string;
  patient_id: string;
  medication_name: string;
  dose: number | null;
  unit: string | null;
  route: string | null;
  start_time: string;
  end_time: string | null;
  status: string;
}

export interface Observation {
  id: string;
  patient_id: string;
  timestamp: string;
  observation_type: string;
  value: string;
  notes: string | null;
}

export interface RiskPrediction {
  id: string;
  patient_id: string;
  timestamp: string;
  risk_score: number;
  risk_level: "low" | "medium" | "high";
  model_version: string;
  prediction_status: string;
}

export interface RiskFeature {
  id: string;
  prediction_id: string;
  feature_name: string;
  feature_value: number | string | null;
  contribution: number;
  rank: number;
  direction: string;
}

export interface DirectusSchema {
  patients: Patient[];
  vitals: Vital[];
  labs: Lab[];
  medications: Medication[];
  observations: Observation[];
  risk_predictions: RiskPrediction[];
  risk_features: RiskFeature[];
}

