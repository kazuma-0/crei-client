import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Fade,
	Flex,
	Grid,
	Heading,
	Input,
	useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiMenu, HiOutlineMenuAlt2 } from "react-icons/hi";

export function NavBar() {
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<>
			<Flex
				px={[3, 10]}
				alignItems='center'
				h={16}
				borderBottom='black 1px solid'
				justifyContent={"space-between"}
			>
				<Box>
					<Heading size='lg'>
						Center for Resilient and Evolving Intelligence (CREI)
					</Heading>
				</Box>
				<Box cursor='pointer'>
					<HiMenu onClick={onOpen} size={32} />
				</Box>
			</Flex>
			<Drawer size='xl' onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay></DrawerOverlay>
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody>
						<Box>
							<Input
								maxW='container.sm'
								variant={"flushed"}
								size='lg'
								placeholder='Search...'
							></Input>
						</Box>

						<Grid
							py={5}
							gap={10}
							gridTemplateColumns={[
								"repeat(1, 1fr)",
								"repeat(2, 1fr)",
							]}
						>
							<Box>
								<Heading as={Link} href='/research' size={"md"}>
									Research
								</Heading>
							</Box>
							<Box>
								<Heading size={"md"}>People</Heading>
							</Box>
							<Box>
								<Heading size={"md"}>Publications</Heading>
							</Box>
							<Box>
								<Heading size={"md"}>Gallery</Heading>
							</Box>
							<Box>
								<Heading size={"md"}>Contact Us</Heading>
							</Box>
							<Box>
								<Heading size={"md"}>News</Heading>
							</Box>
						</Grid>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
