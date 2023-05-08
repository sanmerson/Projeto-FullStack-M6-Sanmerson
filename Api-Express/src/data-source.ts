import { DataSource, DataSourceOptions } from "typeorm"
import path from "path"
import "dotenv/config"

const setDataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
    const migrationsPath: string = path.join(
      __dirname,
      "./migrations/**.{js,ts}"
    );
  
    const nodeEnv = process.env.NODE_ENV

    if(nodeEnv === "production"){
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [entitiesPath],
            migrations: [migrationsPath],
        }
    }

    if(nodeEnv === "test"){
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath],
        }
    }

    return {
        type: "postgres",
        host: process.env.HOST,
        port: parseInt(process.env.PORT!),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [path.join(__dirname, "./entities/**.{js,ts}")],
        migrations: [path.join(__dirname, "./migrations/**.{js,ts}")]
    }
}

const dataSourceConfig = setDataSourceConfig()

export default new DataSource(dataSourceConfig)