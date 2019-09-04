function invert_gif(gif)
{
  let frame = [];
  let length = gif.length;
  let i = 0;
  let first = false;
  let frame_id = -1;
  let L0 = String.fromCharCode(0);
  let L1 = String.fromCharCode(33);
  let L2 = String.fromCharCode(249);
  while (i < length)
  {
    if (i === length - 2)
      break;
    else if (gif[i] === L0 && gif[i+1] === L1 && gif[i+2] === L2)
    {
      frame_id += 1;
      first = true;
      frame.push([]);
      frame[frame_id].push(gif[i+1], gif[i+2]);
      i += 2;
    }
    else if(first === true)
        frame[frame_id].push(gif[i]);
    i += 1;
  }
  let res = [];
  i = 0;
  let frame_num = 0;
  let new_frame = Array.from(frame);
  new_frame.reverse();
  while(i < length)
  {
    if (i === (length - 1))
    {
      res.push(gif[i]);
      break;
    }
    else if (gif[i] === L0 && gif[i+1] === L1 && gif[i+2] === L2)
    {
      res.push(L0);
      res.push(new_frame[frame_num].join(''));
      i += (frame[frame_num].length + 1);
      frame_num += 1;
    }
    else
    {
      res.push(gif[i]);
      i += 1;
    }
  }
  res = res.join('');
  return res;
};
