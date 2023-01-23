import { jsonInstance, formdataInstance } from "./instance";

const jsonAxios = jsonInstance(); //eslint-disable-line no-unused-vars
const formdataAxios = formdataInstance();

// GET

async function getShareArticleByBoardId(boardId) {
  try {
    const { data } = await jsonAxios.get(`/shareboard/detail/${boardId}`);

    if (data.flag === "success") return data.data;
    else console.log("일치하는 게시글이 없습니다.");
  } catch (error) {
    console.log(error);
  }
}

async function getBookmarkStateByUserId(boardId, userId) {
  try {
    const { data } = await jsonAxios.get(`/shareboard/bookmark/${boardId}/${userId}`);

    if (data.flag === "success") return data.data;
    else console.log("일치하는 게시글이나 회원정보가 없습니다.");
  } catch (error) {
    console.log(error);
  }
}

// POST

async function postShareArticle(formData) {
  try {
    const { data } = await formdataAxios.post(`/shareboard`, formData);

    if (data.flag === "success") alert("등록되었습니다 😀");
    else alert("공유 글 등록에 실패하였습니다 😥");
  } catch (error) {
    console.log(error);
  }
}

async function postBookmark(boardId, userId) {
  try {
    console.log({ boardId, userId });
    const { data } = await jsonAxios.post(`/shareboard/bookmark`, { boardId, userId });

    if (data.flag === "success") alert("이 게시글을 북마크로 등록하였습니다. 😀");
    else alert("북마크 등록에 실패하였습니다 😥");
  } catch (error) {
    console.log(error);
  }
}

// DELETE

async function deleteBookmark(boardId, userId) {
  try {
    const { data } = await jsonAxios.delete(`/shareboard/bookmark`, { boardId, userId });

    if (data.flag === "success") alert("북마크를 취소하였습니다. 😀");
    else alert("북마크 취소에 실패하였습니다 😥");
  } catch (error) {
    console.log(error);
  }
}

export { getShareArticleByBoardId, getBookmarkStateByUserId, postShareArticle, postBookmark, deleteBookmark };
