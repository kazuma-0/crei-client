import { Box, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";

export function Publications({
  publications,
}: {
  publications: { title: string }[];
}) {
  return (
    <Box>
      <Heading pb={2} as={Link} href="/publications" size={"md"}>
        Publications
      </Heading>
      <Box>
        <UnorderedList>
          {publications?.map((publication: any) => (
            <ListItem py={1} key={publication.title}>
              {publication.title}
            </ListItem>
          ))}
          <Box color={"blue.600"} as={Link} href="/publications">
            View more...
          </Box>
        </UnorderedList>
      </Box>
    </Box>
  );
}
