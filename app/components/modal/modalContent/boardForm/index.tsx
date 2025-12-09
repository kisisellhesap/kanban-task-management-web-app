import Button from "@/app/components/button";
import CustomContent from "../../form/customContent";
import FormContent from "../../form/formContent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";

import { chooseContentForModal } from "@/app/constant/modalContentType";
import { useParams } from "next/navigation";
import { closeModal } from "@/app/redux/slices/modalSlice";
import { addBoard, editBoard } from "@/app/redux/slices/boardSlice";
import { resetForm, setName, updateForm } from "@/app/redux/slices/boardFormSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const BoardForm = () => {
  const { boards } = useSelector((state: RootState) => state.boardReducer);
  const { form } = useSelector((state: RootState) => state.boardFormReducer);

  const { modalContent } = useSelector((state: RootState) => state.modalReducer);
  const { id } = useParams();
  const item = boards.find((item) => item.id === id);

  const dispatch = useDispatch<AppDispatch>();
  const isEditMode = modalContent === chooseContentForModal.edit_board ? "Edit Board" : "Add New Board";
  useEffect(() => {
    if (modalContent === chooseContentForModal.edit_board) {
      dispatch(
        updateForm({
          ...item,
        })
      );
    }
  }, [modalContent, dispatch, item]);

  return (
    <form
      className="rounded-md p-8 bg-White dark:bg-DarkGrey flex flex-col gap-6 shadow-custom-light shadow-custom-dark"
      onSubmit={async (e) => {
        e.preventDefault();

        if (modalContent === chooseContentForModal.add_board) {
          dispatch(addBoard(form));
          toast.success("Board created succesfuly");
        }
        if (modalContent === chooseContentForModal.edit_board) {
          dispatch(editBoard(form));
          toast.success("Board updated succesfuly");
        }

        dispatch(closeModal());
        dispatch(resetForm());
      }}
    >
      <h4 className="text-black dark:text-White heading-xl">{isEditMode}</h4>

      <FormContent
        title="Name"
        name={"name"}
        onChangeName={(e) => {
          dispatch(setName(e.target.value));
        }}
        value={form.name}
        placeholder={"e.g. Web Design"}
      />

      <CustomContent type="board" childData={form.columns} />

      <Button
        buttonType="submit"
        type="primary"
        size="S"
        text={modalContent === "edit_board" ? "Save Changes" : "Create New Board"}
        width="100%"
      />
    </form>
  );
};

export default BoardForm;
