import Button from "@/app/components/button";
import CustomContent from "../../form/customContent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import FormContent from "../../form/formContent";
import { ChangeEvent, useEffect } from "react";
import {
  resetForm,
  setName,
  updateForm,
} from "@/app/redux/slices/serverState-FETCH/board/boardSlice";
import {
  addBoard,
  saveBoard,
} from "@/app/redux/slices/serverState-FETCH/board/actions";
import { useParams } from "next/navigation";
import { closeModal } from "@/app/redux/slices/clientState-UI/modalSlice";

const BoardForm = () => {
  const { modalContent } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const { boardForm, boards } = useSelector(
    (state: RootState) => state.boardReducer
  );
  const dispatch = useDispatch<AppDispatch>();

  const { id } = useParams();
  const item = boards.find((item) => item.id === id);

  const isEditMode = modalContent === "edit_board";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditMode) {
      if (item) {
        const updateItem = {
          id: item?.id,
          ...boardForm,
        };

        dispatch(saveBoard(updateItem));
      }
    } else {
      dispatch(addBoard(boardForm));
    }

    dispatch(resetForm());
    dispatch(closeModal());
  };

  useEffect(() => {
    if (isEditMode) {
      dispatch(updateForm(item));
    }
  }, [isEditMode]);

  const setNameFn = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <form
      className="rounded-md p-8 bg-White dark:bg-DarkGrey flex flex-col gap-6 shadow-custom-light shadow-custom-dark"
      onSubmit={submitHandler}
    >
      <h4 className="text-black dark:text-White heading-xl">
        {isEditMode ? "Edit Board" : "Add New Board"}
      </h4>

      <FormContent
        title="Name"
        name={"name"}
        onChangeName={setNameFn}
        value={boardForm.name}
        placeholder={"e.g. Web Design"}
      />

      <CustomContent type="board" childData={boardForm.columns} />

      <Button
        buttonType="submit"
        type="primary"
        size="S"
        text={isEditMode ? "Save Changes" : "Create New Board"}
        width="100%"
      />
    </form>
  );
};

export default BoardForm;
