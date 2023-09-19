import Pagination from '../Pagination';
import CommunityListPost from './CommunityListPost';

function CommunityList() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="w-[1015px] flex-col justify-center items-center py-[40px]">
          <h1 className="text-center text-black text-[28px] font-[700] mb-[50px]">
            커뮤니티
          </h1>
          <CommunityListPost />
          <div className="flex justify-end mt-[12px]">
            <button className="w-[140px] h-[52px] bg-primary text-white text-[16px] font-[500] rounded-10">
              글쓰기
            </button>
          </div>
        </div>
        <div className="flex justify-center py-[16px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default CommunityList;
