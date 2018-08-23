interface NodeRequire {
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name?: string) => void;
    (paths: string[], callback: (...modules: any[]) => void): void;
}

declare var ENV: Environments;
type Environments =
    "production"
    | "development";