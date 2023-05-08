package com.ssafy.onu.service;

import com.ssafy.onu.dto.request.ReqReviewCreateFormDto;
import com.ssafy.onu.dto.request.ReqUserInfoDto;
import com.ssafy.onu.dto.response.ResponseReviewDto;
import com.ssafy.onu.dto.response.ResponseTakingDateDto;
import com.ssafy.onu.dto.response.ResponseUserInfoDto;
import com.ssafy.onu.entity.*;
import com.ssafy.onu.repository.ContinuousRepository;
import com.ssafy.onu.repository.ReviewRepository;
import com.ssafy.onu.repository.TakingDateRepository;
import com.ssafy.onu.repository.UserRepository;
import lombok.*;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MypageService {

    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;
    private final ContinuousRepository continuousRepository;

    private static final int ONE = 1;

    // 회원 정보 조회
    public ResponseUserInfoDto getUser(int userId) {
        Optional<User> userData = userRepository.findByUserId(userId);
        return new ResponseUserInfoDto(userData.get());
    }

    // 회원 정보 수정
    @Transactional
    public ResponseUserInfoDto updateUserInfo(int userId, ReqUserInfoDto reqUserInfoDto) {
        Optional<User> userData = userRepository.findByUserId(userId);

        if (userData.isPresent()) {
            userData.get().updateUserInfo(reqUserInfoDto);
            userRepository.save(userData.get());
            return getUser(userId);
        } else {
            return null;
        }
    }

    private final TakingDateRepository takingDateRepository;

    // 복용 날짜 조회
    public List<String> getCheckedDate(int userId, String date) {
        List<String> checkedDate = takingDateRepository.findByUserId_UserIdAndTakingDateDateContains(userId, date).stream()
                .map(d -> d.getTakingDateDate()).collect(Collectors.toList());
        return checkedDate;
    }

    public ResponseReviewDto editReview(ReqReviewCreateFormDto reqReviewCreateFormDto, int reviewId) {
        Optional<Review> review = reviewRepository.findByReviewId(reviewId);
        if(!review.isPresent()) return null;
        review.get().editReview(reqReviewCreateFormDto);
        return new ResponseReviewDto(reviewRepository.save(review.get()));
    }

    public boolean deleteReview(int reviewId) {
        Optional<Review> review = reviewRepository.findByReviewId(reviewId);
        if(!review.isPresent()) return Boolean.FALSE;
        reviewRepository.delete(review.get());
        return Boolean.TRUE;
    }

    @org.springframework.transaction.annotation.Transactional
    public int checkDate(int userId){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String lastTakingDate =  dateTimeFormatter.format(LocalDateTime.now());

        Optional<User> user = userRepository.findByUserId(userId);
        if(!user.isPresent()) return -1;

        takingDateRepository.save(new TakingDate(lastTakingDate, user.get()));
        Optional<Continuous> continuous = continuousRepository.findByContinuousUserId(user.get());
        if (!continuous.isPresent()){
            return continuousRepository.save(new Continuous(user.get(), ONE, lastTakingDate)).getContinuousCount();
        }
        else{
            int betweenDays = (int) Duration.between(LocalDate.parse(continuous.get().getContinuousLastDate(),dateTimeFormatter).atStartOfDay()
                    , LocalDate.parse(lastTakingDate, dateTimeFormatter).atStartOfDay()).toDays();
            System.out.println(betweenDays);
            int continuousCount = ONE;
            if(betweenDays == ONE) {
                continuousCount = continuous.get().getContinuousCount() + ONE;
            }
            continuous.get().changeContinuous(continuousCount, lastTakingDate);
            return continuousRepository.save(continuous.get()).getContinuousCount();
        }
    }
}
