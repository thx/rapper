interface Response1 {
  errno: string;
  errmsg: string;
  data: { foo: number; bar: string }[];
}

function fetch1(): any {
  const responseData: Response1 = {
    errno: '★★★★★',
    errmsg: '',
    data: [
      {
        foo: 1,
        bar: '★',
      },
      {
        foo: 2,
        bar: '★★★★★★',
      },
    ],
  };
  return responseData.data;
}

const result = fetch1();
