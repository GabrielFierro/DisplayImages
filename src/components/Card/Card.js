import { Image } from "@chakra-ui/react";

function Card(props) {
	return (
		<Image
			size="100%"
			rounded="1rem"
			shadow="2xl"
			objectFit="cover"
			alt={props.alt}
			src={props.src}
		/>
	);
}

export default Card;
