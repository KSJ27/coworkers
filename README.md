### Coworkers - 팀 단위 Todo 관리 서비스

Typescript, React 19, Next.js 15 App Router, Tailwind CSS, GitHub Actions, Docker, AWS EC2

- Next.js App Router에서 클라이언트/서버 컴포넌트의 실행 환경 차이를 고려해 토큰 기반 인증 흐름을 설계하고 구현했습니다. **–** [블로그 포스트](https://velog.io/@kangsj0327/Next.js-App-Router-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%ED%86%A0%ED%81%B0-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D-%EB%B0%8F-%EC%9E%90%EB%8F%99-%EA%B0%B1%EC%8B%A0-%EC%B2%98%EB%A6%AC-%EA%B5%AC%ED%98%84%EA%B8%B0)  
  [`src/lib/axiosClient.ts`](https://github.com/KSJ27/coworkers/blob/main/src/lib/axiosClient.ts) [`src/lib/axiosServer.ts`](https://github.com/KSJ27/coworkers/blob/main/src/lib/axiosServer.ts)

- React의 `cache()`로 Next.js 서버에서 요청 결과를 캐싱하고, 클라이언트에서 데이터 수정 시 `revalidateTag()`로 해당 캐시를 무효화해 서버 컴포넌트를 재렌더링하도록 구성했습니다.  
  [`src/app/(content-layout)/[groupId]/(groupId)/page.tsx`](https://github.com/KSJ27/coworkers/blob/main/src/app/(content-layout)/%5BgroupId%5D/(groupId)/page.tsx)

- UI의 낙관적 업데이트를 적용하기 위해 React 19의 `useOptimistic()`, `useTransition()` 훅을 사용했습니다.  
  [`src/app/(content-layout)/[groupId]/(groupId)/_[groupId]/Tasklists/index.tsx`](https://github.com/KSJ27/coworkers/blob/main/src/app/(content-layout)/%5BgroupId%5D/(groupId)/_%5BgroupId%5D/Tasklists/index.tsx)

- 동적 라우트되는 페이지마다 서로 다른 메타데이터를 적용하기 위해 Next.js의 `GenerateMetadata()` API를 사용했습니다.  
  [`src/app/(content-layout)/[groupId]/(groupId)/page.tsx`](https://github.com/KSJ27/coworkers/blob/main/src/app/(content-layout)/%5BgroupId%5D/(groupId)/page.tsx)

- 컴포넌트의 기능과 에러 처리 로직을 분리하기 위해 `react-error-boundary` 라이브러리와 Next.js의 `loading.tsx`, `error.tsx`를 정의해 Error Boundary 개념을 적용했습니다.
  [`src/app/(content-layout)/[groupId]/(groupId)/page.tsx`](https://github.com/KSJ27/coworkers/blob/main/src/app/(content-layout)/%5BgroupId%5D/(groupId)/page.tsx)
  
- 반응형 디자인으로 서로 다른 이미지를 적용하기 위해 `<picture>` 태그와 Next.js의 `getImageProps()` API를 사용했습니다.  
  [`src/app/_home/BackgroundImage.tsx`](https://github.com/KSJ27/coworkers/blob/main/src/app/_home/BackgroundImage.tsx)

- React의 `Context` API와 `CreatePortal()` 을 사용해 공통 Modal 컴포넌트를 구현했습니다.  
  [`src/components/common/modal`](https://github.com/KSJ27/coworkers/tree/main/src/components/common/modal)
