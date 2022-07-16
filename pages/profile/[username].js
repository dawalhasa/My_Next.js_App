/* eslint-disable react-hooks/rules-of-hooks */
import {useRouter} from "next/router";

const profile = () => {
  const router = useRouter();
  const {username} = router.query;
  return <div> This is User {username} profile blog</div>;
};
export default profile;
