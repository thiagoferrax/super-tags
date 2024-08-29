import { useContext } from "react";
import { ConfigurationsContext, ConfigurationsContextResult } from "./ConfigurationsContext";

export function useConfigurations(): ConfigurationsContextResult {
	return useContext(ConfigurationsContext)

}