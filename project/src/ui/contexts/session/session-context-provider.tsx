import { ReactNode } from 'react'
import { SessionContext } from './sessionContext';

type SessionContextProviderProps = {
    children?: ReactNode
}

const SessionContextProvider = ({ children }: SessionContextProviderProps) => {
    const a = "";
    return (
        <SessionContext.Provider value={{

        }}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider