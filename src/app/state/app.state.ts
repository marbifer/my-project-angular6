import { WelcomeState } from '../components/state/welcome.reducer';
// import { QuestionsState } from '../components/questions/state/questions.reducer';

// Defino la interfaz para todo el estado del Store.
export interface State {
    welcome: WelcomeState;
    questions: WelcomeState;
    // user: any;
}

