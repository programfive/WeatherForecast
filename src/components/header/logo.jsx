import LogoWeatherio from "../../assets/images/logo.png";
export function Logo(props) {
	return (
		<img
			src={LogoWeatherio}
			alt='Logo Weatherio'
			{...props}
		/>
	);
}
