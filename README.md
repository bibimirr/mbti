# MBTI Test
## 개요
비비미르의 첫 번째 프로젝트. 간단한 성격 유형(MBTI) 검사를 한 후 본인 유형에 어울리는 글로벌 기업을 보여준다.
## 사용한 SW
- 서비스: HTML, CSS, JS
- 플랫폼: Nginx
- 인프라: GCP GKE, Google Domains
## 기능
- MBTI 검사
- 유형에 매칭되는 결과 페이지
- 결과를 이미지로 저장
- 공유 링크 복사
- 일일/누적 참여자 수
## 사용 방법
1. Nginx 설치 (Ubuntu 기준)
```shell
sudo apt update
sudo apt install nginx
```
2. 소스 다운
```shell
git clone https://github.com/bibimirr/mbti.git
```
3. 다운 받은 소스를 Nginx doc root에 복사
```shell
cp mbti usr/share/nginx/html
```
4. Nginx 실행
```shell
sudo service nginx start
```
5. 접속 확인
```shell
curl localhost/mbti/index.html
```
# 참고 URL
- Nginx 설치: https://www.nginx.com/resources/wiki/start/topics/tutorials/install/
