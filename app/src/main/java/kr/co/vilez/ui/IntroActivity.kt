package kr.co.vilez.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.databinding.DataBindingUtil
import kr.co.vilez.R
import kr.co.vilez.databinding.ActivityIntroBinding
import kr.co.vilez.ui.user.user.LoginActivity

class IntroActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val binding:ActivityIntroBinding = DataBindingUtil.setContentView(this, R.layout.activity_intro)
        binding.activity = this
        supportActionBar?.hide() // 액션바 숨김
    }

    fun moveActivity(view: View) {
        when(view.id) {
            R.id.btn_intro_enter -> {
                startActivity(Intent(this@IntroActivity, MainActivity::class.java))
            }
            R.id.tv_intro_login -> {
                startActivity(Intent(this@IntroActivity, LoginActivity::class.java))
            }
        }
        finish()
    }
}