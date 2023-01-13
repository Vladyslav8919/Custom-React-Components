import { BsFillCloudUploadFill, BsFillCartCheckFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";

import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>
          <BsFillCloudUploadFill />
          Upload
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          <BiSend />
          Send
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <AiOutlineDelete />
          Delete
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <BsFillCartCheckFill />
          Buy
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GiConfirmed /> Confirm
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
