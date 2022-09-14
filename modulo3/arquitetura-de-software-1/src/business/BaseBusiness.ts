abstract class BaseBusiness {
    private static EMAIL_PATTERN: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    protected validateEmail = (email: string): boolean => {
        const regex: RegExp = new RegExp(BaseBusiness.EMAIL_PATTERN);
        return regex.test(email);
    };

    protected validatePassword = (password: string): boolean => {
        return password.length >= 6;
    };
}

export default BaseBusiness;
