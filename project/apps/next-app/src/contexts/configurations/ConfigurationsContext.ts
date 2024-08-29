import React from "react";

export type ConfigurationsContextResult = {
	API_GATEWAY: string
}


export const ConfigurationsContext = React.createContext<ConfigurationsContextResult>({
	API_GATEWAY: ""
})