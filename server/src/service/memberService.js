export default class memberService {
    save(member) {
        member.save(err => console.log(err));
    }
}
