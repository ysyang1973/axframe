import {
  AppRepositoryInterface,
  GetAppMenuRequest,
  GetAppMenuResponse,
  GetProgramAuthorityRequest,
  GetProgramAuthorityResponse,
} from "./AppRepositoryInterface";
import { delay } from "../../@core/utils/thread/timing";

export class AppRepositoryMock extends AppRepositoryInterface {
  async getAppMenu(params: GetAppMenuRequest): Promise<GetAppMenuResponse> {
    await delay(500);

    return {
      ds: [
        {
          menuGrpCd: "_",
          multiLanguage: {
            ko: "예제",
            en: "Examples",
          },
          iconTy: "Example",
          children: [
            {
              multiLanguage: {
                en: "Forms",
                ko: "양식",
              },
              iconTy: "Default",
              level: 1,
              sort: 0,
              progCd: "EXAMPLE_FORM",
              children: [],
            },
            {
              multiLanguage: {
                en: "List",
                ko: "목록",
              },
              iconTy: "Default",
              level: 1,
              sort: 1,
              progCd: "EXAMPLE_LIST",
              children: [],
            },
            {
              multiLanguage: {
                en: "List & Drawer",
                ko: "목록과 서랍",
              },
              iconTy: "Default",
              level: 1,
              sort: 2,
              progCd: "EXAMPLE_LIST_AND_DRAWER",
              children: [],
            },
            {
              multiLanguage: {
                en: "List & Modal",
                ko: "목록과 모달",
              },
              iconTy: "Default",
              level: 1,
              sort: 3,
              progCd: "EXAMPLE_LIST_AND_MODAL",
              children: [],
            },
            {
              multiLanguage: {
                en: "List & Form",
                ko: "목록과 양식",
              },
              iconTy: "Default",
              level: 1,
              sort: 4,
              progCd: "EXAMPLE_LIST_WITH_FORM",
              children: [],
            },
            {
              multiLanguage: {
                en: "List & Form & List",
                ko: "목록과 양식-목록",
              },
              iconTy: "Default",
              level: 1,
              sort: 5,
              progCd: "EXAMPLE_LIST_WITH_FORM_LIST",
              children: [],
            },
            {
              multiLanguage: {
                en: "List & List",
                ko: "목록과 목록",
              },
              iconTy: "Default",
              level: 1,
              sort: 6,
              progCd: "EXAMPLE_LIST_WITH_LIST",
              children: [],
            },
            {
              multiLanguage: {
                en: "Three List",
                ko: "3개 목록",
              },
              iconTy: "Default",
              level: 1,
              sort: 7,
              progCd: "EXAMPLE_THREE_LIST",
              children: [],
            },
            {
              multiLanguage: {
                en: "Stats",
                ko: "통계",
              },
              iconTy: "Default",
              level: 1,
              sort: 8,
              progCd: "EXAMPLE_STATS",
              children: [],
            },
            {
              multiLanguage: {
                en: "Segment",
                ko: "라벨관리",
              },
              iconTy: "Default",
              level: 1,
              sort: 9,
              progCd: "SEGMENT_LABEL",
              children: [],
            },
            {
              multiLanguage: {
                en: "Label",
                ko: "라벨",
              },
              iconTy: "Default",
              level: 1,
              sort: 10,
              progCd: "LABEL",
              children: [],
            },
          ],
          userGroup: ["ROLE_ADMIN"],
        },
      ],
    };
  }

  async getProgramAuthority(params: GetProgramAuthorityRequest): Promise<GetProgramAuthorityResponse> {
    return Promise.resolve({});
  }
}
