export const ForgotPasswordData = () => ({
    step: 'request',
    email: '',

    sendResetCode() {
        this.step = 'verify';
    },

    goToCodeStep() {
        this.step = 'code';
    },
});

export const ResetPasswordData = () => ({
    step: 'form',

    resetPassword() {
        this.step = 'success';
    },
});

export const SignupData = () => ({
    perfil: 'paciente',
});
