import { Grid, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

export const HomeLoading = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Stack p={75}>
    <Grid templateRows="repeat(2, 100px)" gap={1} p={0}>
      <Skeleton height="100px" />
      <Skeleton height="20px" />
    </Grid>
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={15} pt={0}>
      <SkeletonText mt="4" noOfLines={24} spacing="2" />
      <Grid templateRows="repeat(2, 50%)" gap={1} p={0}>
        <Stack pt={4}>
          <Skeleton height="50px" />
          <Skeleton height="50px" />
          <Skeleton height="50px" />
        </Stack>
        <Skeleton />
      </Grid>
    </Grid>
  </Stack>
);
