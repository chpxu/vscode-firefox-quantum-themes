struct VS_OUTPUT {
  vector Pos: POSITION;
  vector Colour1: COLOR0;
};

VS_OUTPUT main(vector Pos: POSITION, vector Norm: NORMAL) {
  VS_OUTPUT Out = (VS_OUTPUT)0;
  Out.Pos = mul(view_proj_matrix, Pos);

  //comment
  float3 lightVector = normalize(light.position)
}
