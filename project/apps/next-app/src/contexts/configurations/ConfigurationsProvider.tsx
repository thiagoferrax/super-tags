"use client"
import React, { useEffect, useState } from 'react'
import { ConfigurationsContext, ConfigurationsContextResult } from './ConfigurationsContext';
import Loading from '../../components/loading';

function ConfigurationsProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)
	const [configurations, setConfigurations] = useState<ConfigurationsContextResult>({
		API_GATEWAY: ""
	})
	useEffect(() => {
		Initialize()
	}, [])

	async function Initialize() {
		try {
			const httpResponse = await fetch("/configurations/Configurations.json")
			const data = await httpResponse.json()
			setConfigurations(data)

		} catch (err: any) {
			setHasError(true)
		}
		setIsLoading(false)
	}

	if (isLoading)
		return <Loading />
	else if (hasError) {
		return <div>Unexpected Error</div>
	}
	else {
		return <ConfigurationsContext.Provider value={configurations}>
			{children}
		</ConfigurationsContext.Provider>
	}
}

export default ConfigurationsProvider