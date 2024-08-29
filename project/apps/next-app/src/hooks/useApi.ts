import { promises } from "dns"
import { useConfigurations } from "../contexts/configurations/useConfigurations"

export type useApiParams = {
	url: string,
	method: string,
	body?: object
}

export type useApiExecuteResult = {
	status: number,
	data?: any
}

export type useApiResult = {
	Request: (params: useApiParams) => Promise<useApiExecuteResult>
}





export function useApi(): useApiResult {
	const configurations = useConfigurations()
	async function Request(params: useApiParams): Promise<useApiExecuteResult> {
		const httpResponse = await fetch(`${configurations.API_GATEWAY}${params.url}`, {
			method: params.method,
			body: params.body ? JSON.stringify(params.body) : params.body,
			headers: { 'content-type': 'application/json' },
		})
		const data = await httpResponse.json()
		return {
			status: httpResponse.status,
			data
		}
	}

	return {
		Request
	}
}