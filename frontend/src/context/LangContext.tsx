import { FC, ReactNode, createContext, useContext, useState, useEffect } from 'react';

interface LangState {
    lang: "en" | "de" | "rs" | null;
    changeLang: (lang: "en" | "de" | "rs") => void | null
}
interface LangProviderProps {
    children: ReactNode;
}

const LangContext = createContext<LangState | null>(null);

export const useLang = () => {
    return useContext(LangContext)
}

const LangProvider: FC<LangProviderProps> = ({ children }) => {
    const [lang, setLang] = useState<"en" | "de" | "rs">("en")
    const [loading, setLoading] = useState(true)

    const changeLang = (lang: "en" | "de" | "rs") => {
        document.querySelector('html')!.setAttribute('lang', lang)
        setLang(lang)
    }
    useEffect(() => {
        setLoading(false)
    })

    return (
        <LangContext.Provider value={{ lang, changeLang }}>
            {loading ? <p>Loading...</p> : children}
        </LangContext.Provider>
    );
}

export default LangProvider;