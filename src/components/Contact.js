import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import Map from "../components/Map";
import { ReactElement } from "react";
import { FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Contact() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Contact Us</Heading>
          <Text color={"black.500"} fontSize={"0.5xl"}>
            UPES - University of Petroleum and Energy Studies, Bidholi, via Prem
            Nagar, Dehradun, Uttarakhand 248007
          </Text>
          <Stack>
            <Feature
              icon={<Icon as={FaMailBulk} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"opencommunity@ddn.upes.ac.in"}
            />
            <Feature
              icon={<Icon as={FaLinkedin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"/open-community"}
            />
            <Feature
              icon={<Icon as={FaTwitter} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"/UpesOpen"}
            />
          </Stack>
        </Stack>
        <Map />
      </SimpleGrid>
    </Container>
  );
}
