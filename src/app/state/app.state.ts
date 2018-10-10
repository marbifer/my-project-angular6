import { PaymentsState } from '../components/welcome/state/welcome.reducer';
import { QuestionsState } from '../components/questions/state/questions.reducer';
// import { ReferenceState } from '../components/welcome/state/welcome.reducer';

// Defino la interfaz para todo el estado del Store.
export interface State {
    payments: PaymentsState;
    questions: QuestionsState;
    // user: any;
}

