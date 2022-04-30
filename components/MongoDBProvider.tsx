import { Db, MongoClient, MongoDBNamespace } from 'mongodb';
import {createContext, useContext, useCallback, useState, useMemo} from 'react';


interface MongoProviderProps {
  client: MongoClient;
  children?: React.ReactNode;
};

export const MongoContext = createContext({});

export const MongoDBProvider: React.FC<MongoProviderProps> = props => {
  const {client, children} = props;
  const [loadDB, _context] = useMongoDB(client);
  const context = useMemo(() => ({
    ..._context,
    loadDB,
    client,
  }), [loadDB, client, _context]);
  return <MongoContext.Provider value={context}>
    {children}
  </MongoContext.Provider>
}

export const useMongoDB = (client: MongoClient) => {
  const [mongoDB, setMongoDB] = useState<Db | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const loadDB = useCallback(async () => {
    setLoading(true);
    try {
      if (mongoDB === null) {
        const conn = await client.connect();
        console.log(conn);
        if (conn) {
          const db = conn.db('inform0');
          setMongoDB(db);
        }
      }
    } catch (e) {

    } finally {
      setLoading(false);
    }
  }, [client]);
  return useMemo(() => [
    loadDB,
    {
      db: mongoDB,
      setDB: setMongoDB,
      loading,
      error,
    }
  ] as const, [
    loadDB,
    mongoDB,
    setMongoDB,
    loading,
    error,
  ]);
}