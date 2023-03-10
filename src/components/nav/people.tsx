import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function People() {
	const router = useRouter();
	return (
		<Box>
			<Heading pb={2} size={"md"}>
				People
			</Heading>
			<Flex gap={2} flexDir={"column"}>
				<Box as={Link} href='/people/professor'>
					Professor
				</Box>
				<Box as={Link} href='/people/current-students'>
					Current Students
				</Box>
				<Box as={Link} href='/people/post-doctoral-researchers'>
					Post doctoral Researchers
				</Box>
				<Box as={Link} href='/people/interns'>
					Interns
				</Box>
				<Box as={Link} href='/people/alumni'>
					Alumni
				</Box>
			</Flex>
		</Box>
	);
}
