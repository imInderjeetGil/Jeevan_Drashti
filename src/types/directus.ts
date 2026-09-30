export interface DirectusSchema {
  patients: Patient[];
  vitals: Vital[];
  labs: Lab[];
  medications: Medication[];
  observations: Observation[];
  risk_predictions: RiskPrediction[];
  risk_features: RiskFeature[];
}

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
  test_name: string;
  value: number | null;
  unit: string | null;
}

export interface Medication {
  id: string;
  patient_id: string;
  medication_name: string;
  dosage: string | null;
  route: string | null;
  frequency: string | null;
  start_time: string | null;
  end_time: string | null;
}

export interface Observation {
  id: string;
  patient_id: string;
  timestamp: string;
  observation: string;
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
  patient_id: string;
  timestamp: string;
  feature_name: string;
  feature_value: number | null;
}