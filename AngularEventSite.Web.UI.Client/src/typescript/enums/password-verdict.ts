export enum PasswordVerdict {
    /**
     * @description Too guessable: risky password.
     */
    Weak = 0,

    /**
     * @description Very guessable: protection from throttled online attacks.
     */
    Normal = 1,

    /**
     * @description Somewhat guessable: protection from unthrottled online attacks.
     */
    Medium = 2,

    /**
     * @description Safely unguessable: moderate protection from offline slow-hash scenario.
     */
    Strong = 3,

    /**
     * @description Very unguessable: strong protection from offline slow-hash scenario.
     */
    VeryStrong = 4
}
