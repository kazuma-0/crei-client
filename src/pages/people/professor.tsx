import client from "@/client";
import { Person } from "@/utils";
import {
  Avatar,
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Manrope } from "@next/font/google";
import Head from "next/head";

const font = Manrope({
  subsets: ["latin"],
});
export default function Professor(props: { professor: Person }) {
  console.log(props);

  return (
    <>
      <Head>
        <title>Professor</title>
      </Head>
      <Grid
        h="calc(100vh - 4rem)"
        gridTemplateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        <GridItem>
          <Box bgColor="gray.100" p={10}>
            <Avatar
              size={"2xl"}
              src="http://ccmp.knu.ac.kr/images/Professor-large.jpg"
            ></Avatar>
            <Text fontSize={"2xl"}>{props.professor.name}</Text>
            {/* <Image
              rounded={"sm"}
              my={10}
              src="http://ccmp.knu.ac.kr/images/Professor-large.jpg"
            ></Image> */}
            <Heading
              size="xs"
              fontFamily={font.style.fontFamily}
              textTransform={"uppercase"}
            >
              Professor
            </Heading>
          </Box>
        </GridItem>
        <GridItem maxW={"container.sm"} mx="auto" colSpan={2}>
          <Box py={10}>
            <Text fontSize={"md"} letterSpacing="md" lineHeight={"7"}>
              {props.professor.description}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.get("people");
  return {
    props: {
      professor: data[0],
    },
  };
}
