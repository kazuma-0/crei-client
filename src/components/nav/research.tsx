import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export function Research({
  research_publications,
}: {
  research_publications: { title: string }[];
}) {
  return (
    <Box>
      <Heading as={Link} href="/research" size={"md"}>
        Research
      </Heading>
      <Box>
        <UnorderedList>
          {research_publications?.map((research: any) => (
            <ListItem py={1} key={research.title}>
              {research.title}
            </ListItem>
          ))}
          <Box color={"blue.600"} as={Link} href="/research">
            View more...
          </Box>
        </UnorderedList>
      </Box>
    </Box>
  );
}
