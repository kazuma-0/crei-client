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
  ListItem,
  Portal,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { HiMenu, HiOutlineMenuAlt2 } from "react-icons/hi";
import { useMutation, useQuery } from "react-query";
import { People, Publications, Research } from "@/components/nav";

export function NavBar() {
  const { data, isFetching } = useQuery({
    queryKey: ["fetch-publications-research"],
    queryFn: async () => {
      const { data } = await axios.get("/api/projects-and-research");
      return data;
    },
  });

  const { isOpen, onClose, onOpen } = useDisclosure({});
  return (
    <>
      <Flex
        px={[3, 10]}
        alignItems="center"
        h={16}
        borderBottom="black 1px solid"
        justifyContent={"space-between"}
      >
        <Box>
          <Heading size="lg">
            Center for Resilient and Evolving Intelligence (CREI)
          </Heading>
        </Box>
        <Box cursor="pointer">
          <HiMenu onClick={onOpen} size={32} />
        </Box>
      </Flex>
      <Portal>
        <Drawer size="xl" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay></DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Box>
                <Input
                  maxW="container.sm"
                  variant={"flushed"}
                  size="lg"
                  placeholder="Search..."
                ></Input>
              </Box>

              <Grid
                py={5}
                gap={10}
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              >
                <Research research_publications={data?.research_publications} />
                <People />
                <Publications publications={data?.publications}></Publications>
                {/* GALLERY */}
                <Box>
                  <Heading size={"md"}>Gallery</Heading>
                </Box>
                {/* CONTACT US */}
                <Box>
                  <Heading size={"md"}>Contact Us</Heading>
                </Box>
                {/* NEWS */}
                <Box>
                  <Heading size={"md"}>News</Heading>
                </Box>
              </Grid>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Portal>
    </>
  );
}
