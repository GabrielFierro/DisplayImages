import { useState } from "react";
import {
	Box,
	Button,
	ChakraProvider,
	Fade,
	Flex,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import ImageCard from "./components/Card/Card.js";
const professions = [
	{
		category: "All",
	},
	{
		category: "Hamster",
		title: "Hamster",
		src: "./images/hamster.avif",
	},
	{
		category: "Cat",
		title: "Cat",
		src: "./images/cat.avif",
	},
	{
		category: "Dog",
		title: "Smiling dog",
		src: "./images/dog.avif",
	},
];

function App() {
	// Declaración de una variable de estado con Hooks
	const [profession, setProfession] = useState("");
	const [display, setDisplay] = useState(true);
	const { isOpen, onToggle } = useDisclosure();

	return (
		<ChakraProvider>
			<Flex
				align="center"
				justify="center"
				wrap="wrap"
				minH="100vh"
				bg="gray.200"
			>
				<Stack direction="column" spacing={4} w={{ base: "90%", md: "60%" }}>
					<Text fontSize="3xl">Select the animal that you like most</Text>
					<Stack direction="row" spacing={4} align="center">
						{professions.map((profession, index) => (
							<Button
								w="100%"
								colorScheme="pink"
								variant="solid"
								key={index}
								onClick={() => {
									setProfession(profession);
									setDisplay(false);
									onToggle();
								}}
							>
								{profession.category}
							</Button>
						))}
					</Stack>
				</Stack>
				<Fade in={isOpen}>
					<Stack direction="row" spacing={4}>
						<Text fontSize={{ base: "lg", md: "xl" }}>
							{(display || profession.category === "All") && (
								<Stack
									direction={{ base: "column", md: "row" }}
									spacing={4}
									mx={[2, 4, 6, 8]}
									w="90%"
									align="center"
									justify="center"
								>
									<Box w={{ base: "60%", sm: "30%", md: "100%" }}>
										<ImageCard alt="Hamster" src="./images/hamster.avif" />
									</Box>
									<Box w={{ base: "60%", sm: "30%", md: "100%" }}>
										<ImageCard alt="Cat" src="./images/cat.avif" />
									</Box>
									<Box w={{ base: "60%", sm: "30%", md: "100%" }}>
										<ImageCard alt="Dog" src="./images/dog.avif" />
									</Box>
								</Stack>
							)}
							{profession.category === "Hamster" && (
								<Stack
									direction={{ base: "column", md: "row" }}
									spacing={2}
									mx={[1, 2, 3, 4]}
									w="90%"
									align="center"
									justify="center"
								>
									<Box w={{ base: "60%", md: "100%" }}>
										<ImageCard alt={profession.category} src={profession.src} />
									</Box>
								</Stack>
							)}
							{profession.category === "Cat" && (
								<Stack
									direction={{ base: "column", md: "row" }}
									spacing={2}
									mx={[1, 2, 3, 4]}
									w="90%"
									align="center"
									justify="center"
								>
									<Box w={{ base: "60%", md: "100%" }}>
										<ImageCard alt={profession.category} src={profession.src} />
									</Box>
								</Stack>
							)}
							{profession.category === "Dog" && (
								<Stack
									direction={{ base: "column", md: "row" }}
									spacing={2}
									mx={[1, 2, 3, 4]}
									w="90%"
									align="center"
									justify="center"
								>
									<Box w={{ base: "60%", md: "100%" }}>
										<ImageCard alt={profession.category} src={profession.src} />
									</Box>
								</Stack>
							)}
						</Text>
					</Stack>
				</Fade>
			</Flex>
		</ChakraProvider>
	);
}

export default App;
