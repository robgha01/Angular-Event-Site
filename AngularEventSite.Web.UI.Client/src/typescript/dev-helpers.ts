export class Env {
    static isProd(): boolean {
        return ENV === "production";
    }

    static isDev(): boolean {
        return ENV === "development";
    }
}
