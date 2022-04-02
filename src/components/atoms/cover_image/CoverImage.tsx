function CoverImage(props: any) {
  if (props.name === undefined) return (<div></div>);
  return <img data-testid="coverImage" src={require("./" + props.name + ".svg")}></img>;
}

export default CoverImage;
