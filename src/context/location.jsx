import { createContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
	const [location, setLocation] = useState({
		lat: 51.5073219,
		lon: -0.1276474,
	});

	return (
		<LocationContext.Provider
			value={{ location, setLocation }}>
			{children}
		</LocationContext.Provider>
	);
};
