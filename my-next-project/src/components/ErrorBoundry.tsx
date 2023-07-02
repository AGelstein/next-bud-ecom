//https://nextjs.org/docs/pages/building-your-application/routing/custom-error#customizing-the-500-page
export default function Error({ statusCode }: any) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
