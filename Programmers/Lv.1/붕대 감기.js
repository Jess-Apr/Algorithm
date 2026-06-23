const input = require("./example");

function solution(bandage, health, attacks) {
  const [bandageTime, healPerSec, bonusHeal] = bandage;
  const lastAttackTime = attacks[attacks.length - 1][0];

  let curHealth = health;
  let attackIndex = 0;
  let successCount = 0;

  for (let i = 1; i <= lastAttackTime; i++) {
    // 현재시간 = 공격시간이라면 체력을 깎고 붕대 감기 횟수를 초기화
    if (attacks[attackIndex][0] === i) {
      curHealth -= attacks[attackIndex][1];

      if (curHealth <= 0) return -1;

      attackIndex++;
      successCount = 0;
      continue;
    }

    // 체력과는 상관없이 공격을 당하지 않았다면 붕대 감기 횟수 증가
    successCount++;

    // 붕대 감기 횟수가 시전시간에 도달했다면 추가 체력을 회복하고, 붕대 감기 횟수 초기화
    if (successCount === bandageTime) {
      curHealth = Math.min(health, curHealth + healPerSec + bonusHeal);
      successCount = 0;
    } else {
      // 그렇지 않다면 초당 회복량 만큼만 회복
      curHealth = Math.min(health, curHealth + healPerSec);
    }
  }

  return curHealth;
}

const answer = solution(input[0], input[1], input[2]);
console.log(answer);
